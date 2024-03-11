//  Set default connections //

// const mogoose = require("mongoose");
// const schema = mongoose.schema;

const productScheme = new schema({
    id: { type: int, require },
    name: { type: String, require },
    desc: { type: String, require },
    SKU: { type: String, require },
    category_id: { type: int, require },
    inventoru_id: { type: int, require },
    price: { type: decimal, require },
    discount_id: { type: int, require },
    created_at: { timestamp: true },
    modified_at: { timestamp: true },
    deleted_at: { timestamp: true }
});

const productCategoryScheme = new scheme({
    id: { type: int, require },
    name: { type: String, require },
    desc: { type: String, require },
    created_at: { timestamp: true },
    modified_at: { timestamp: true },
    deleted_at: { timestamp: true }
})

const productInventoryScheme = new scheme({
    id: { type: int, require },
    quantity: { type: int, require },
    created_at: { timestamp: true },
    modified_at: { timestamp: true },
    deleted_at: { timestamp: true }
})

const discountScheme = new scheme({
    id: { type: int, require },
    name: { type: String, require },
    desc: { type: String, require },
    discount_percentage: { type: decimal, require },
    active: { type: Boolean },
    created_at: { timestamp: true },
    modified_at: { timestamp: true },
    deleted_at: { timestamp: true }
})