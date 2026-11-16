const Category = require("../model/category.model")

const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find()

        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addCategory = async (req, res) => {
    try {
        const { title } = req.body

        if (!title) {
            return res.status(400).json({
                message: "title kiritilishi kerak"
            })
        }

        await Category.create({
            title
        })

        res.status(201).json({
            message: "Category yaratildi"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateCategory = async (req, res) => {
    try {
        const { title } = req.body
        const { id } = req.params

        const foundedCategory = await Category.findById(id)

        if (!foundedCategory) {
            return res.status(404).json({
                message: "Category topilmadi"
            })
        }

        await Category.findByIdAndUpdate(id, { title }, { runValidators: true })

        res.status(200).json({
            message: "Category o'zgartirildi"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params

        const foundedCategory = await Category.findById(id)

        if (!foundedCategory) {
            return res.status(404).json({
                message: "Category topilmadi"
            })
        }

        await Category.findByIdAndDelete(id)

        res.status(200).json({
            message: "Category o'chirildi"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAllCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
