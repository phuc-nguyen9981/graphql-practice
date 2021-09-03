import jwt from "jsonwebtoken";

class JwtService {
	/**
	 * TODO: update the payload with required fields
	 */
	createToken(payload: any): Promise<string> {
		return new Promise((resolve, reject) => {
			jwt.sign(payload, process.env.JWT_SECRET, null, (err, token) => {
				if (err) {
					return reject(err);
				}
				return resolve(token);
			});
		});
	}

	/**
	 * TODO: update return payload with required fields
	 */
	verifyToken(token: string): Promise<any> {
		if (!token) {
			return null;
		}
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					return reject(err);
				}
				return resolve(decoded);
			});
		});
	}
}

export default new JwtService();
