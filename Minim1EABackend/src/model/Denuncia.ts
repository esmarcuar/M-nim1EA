import { Schema, model } from 'mongoose';

const Denuncia = new Schema({
	title: String,
    description: String,
    date: Date,
    num_denuncias: Number,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    denunciados: [{
        type: Schema.Types.ObjectId,
        ref: "User"
        
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],


});

export default model('Denuncia', Denuncia);