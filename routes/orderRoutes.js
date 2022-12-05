let mongoose = require("mongoose");
    express = require("express");
    router = express.Router();

let orderSchema = require("../models/orders");
const router = require("./authRoutes");

//CRUD

// CREATE
//localhost:4000/orders/create (endpoitnt)
router.route("/create").post((req, res, next) => {
    orderSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = reuter

// READ ORDERS
//localhost:4000/orders (endpoitnt)

router.route("/").get((req, res) => {
    orderSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
})

//localhost:4000/orders/1 (endpoitnt)
router.route("/:id").get((req, res) => {
    orderSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
})

// UPDATE
//localhost:4000/orders/edit/2 (endpoitnt)

router.route("edit/:id").put((req, res) => {
    orderSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    },
    (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
})

// DELETE
//localhost:4000/orders/delete/2 (endpoitnt)

router.route("delete/:id").delete((req, res) => {
    orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
        
    })
})



