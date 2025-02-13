const express=require("express");
const {getProduct,getProductId,createProduct,updateProduct,deleteProduct}=require("../controllers/productController");

const router=express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products
 *     description: Fetches a list of all productss from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123"
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                     Decsription:
 *                         type:string
 *                     Price:
 *                         type:Number
 */
router.get("/",getProduct);
router.get("/:id",getProductId);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product to the inventory.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Product:
 *                 type: string
 *                 example: "Wireless Mouse"
 *               Description:
 *                 type: string
 *                 example: "A high-precision wireless mouse with ergonomic design."
 *               Price:
 *                 type: number
 *                 example: 25.99
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 Product:
 *                   type: string
 *                   example: "Wireless Mouse"
 *                 Description:
 *                   type: string
 *                   example: "A high-precision wireless mouse with ergonomic design."
 *                 Price:
 *                   type: number
 *                   example: 25.99
 */

router.post("/",createProduct);
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates details of an existing product.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Product:
 *                 type: string
 *                 example: "Updated Mouse"
 *               Description:
 *                 type: string
 *                 example: "An improved wireless mouse with longer battery life."
 *               Price:
 *                 type: number
 *                 example: 30.99
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 Product:
 *                   type: string
 *                   example: "Updated Mouse"
 *                 Description:
 *                   type: string
 *                   example: "An improved wireless mouse with longer battery life."
 *                 Price:
 *                   type: number
 *                   example: 30.99
 *       404:
 *         description: Product not found
 */

router.put("/:id",updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Removes a product from the inventory.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         Description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found
 */

router.delete("/:id",deleteProduct);

module.exports=router;