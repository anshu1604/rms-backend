import mongoose from 'mongoose';
const { Schema } = mongoose;

const RolesSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    created_on: {
        type: Date
    },
    updated_on: {
        type: Date,
        default: Date.now
    },
    deleted_on: {
        type: Date
    }
})

const Roles = mongoose.model("roles", RolesSchema);

RolesSchema.set('toJSON', {
    virtuals: true
});

export default Roles;