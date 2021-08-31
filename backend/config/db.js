import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// const { connect } = pkg;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useNewUrlParser: true,
		});
		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.bold.underline);
		process.exit(1);
	}
};

export default connectDB;
