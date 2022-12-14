import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import User from "./api/User";
import Booking from "./api/Booking";
import Series from "./api/Series";
import Event from "./api/Event";


const app = express();
const port = process.env.PORT || 5432;

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())
app.use(cors());

app.use('/api/users', User)
app.use('/api/bookings', Booking)
app.use('/api/series', Series)
app.use('/api/events', Event)

app.get('/', ( req: express.Request, res: express.Response ) => {
	res.send('Hello World!')
})

mongoose.connect('mongodb://0.0.0.0:27017/TVTracker', { useNewUrlParser : true } as ConnectOptions)
	.then(() => {
		// tslint:disable-next-line:no-console
        app.listen(port, () => console.log('Server corriendo en el puerto ' + port));
	})
	.catch((err) => {
		// tslint:disable-next-line:no-console
		console.log(err);
	});
