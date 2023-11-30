import request from "supertest";
import app from "../../server";
import { createNewUser } from "../user";

describe("user handler", () => {
	it("should create new user", async () => {
		const req = { body: { username: "hello", password: "hi" } };
		const res = {
			json({ token }) {
				expect(token).toBeTruthy();
			},
		};

		await createNewUser(req, res, () => {});
	});
});
