const categories = [
    { id: "1", name: "Headphones" },
    { id: "2", name: "Earbuds" },
    { id: "3", name: "Smart Speakers" },
    { id: "4", name: "Smartphones" },
    { id: "5", name: "Smartwatches" },
  ];
  
  export const getCategories = (req, res) => res.status(200).json(categories);
  
  export const getCategory = (req, res) => {
    const id  = req.params.id
    const category = categories.find((pro) => pro.id == id);

    res.status(200).json(category).send()
  }
  
  export const createCategory = (req, res) => {
    categories.push(req.body);
    res.status(201).send() 
  };
  
  export const updateCategory = (req, res) => {
    const index = categories.findIndex((cat) => cat.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Category not found" });
  
    categories[index] = { ...categories[index], ...req.body };
    res.status(200).json(categories[index]);
  };
  
  export const deleteCategory = (req, res) => {
    const id = req.params.id;
    const index = categories.findIndex((pro) => pro.id == id);
  
    if(index !== -1) {
        categories.splice(index,1)
    }
  
    res.status(204).send()
  };
  