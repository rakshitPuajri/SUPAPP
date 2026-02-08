
import { supabase } from "../db/supabase.js";

const getmaterialList = async (req, res) => {
    const { data: materials, error } = await supabase.from('materials').select('*');
    if (error) {
        return res.status(500).json({ error: error.message })
    }
    res.status(200).json({ materials });
}

const createMaterial = async (req, res) => {

    try {
        const { material_number, material_name, base_uom, material_type, is_active } = req.body;

        if (!material_number || !material_name || !base_uom) {
            return res.status(400).json({ message: "material_number and material_name and base_uom is required" })
        }

        // Check if material_number already exists
        const { data: existingMaterial, error: checkError } = await supabase
            .from("materials")
            .select('material_number')
            .eq('material_number', material_number)
            .single();

        if (checkError && checkError.code !== 'PGRST116') {
            throw checkError;
        }

        if (existingMaterial) {
            return res.status(409).json({ message: "Material number already exists" });
        }

        const { data: material, error } = await supabase.from("materials")
            .insert([
                {
                    material_number,
                    material_name,
                    base_uom,
                    material_type,
                    is_active
                }
            ]).select();

        if (error) throw error;

        return res.status(200).json({
            message: "Material is Created",
            material
        });

    } catch (error) {
        console.error("Supabase insert error:", error.message);
        return res.status(500).json({ error: error.message });
    }

}
export { getmaterialList, createMaterial };