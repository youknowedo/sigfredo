import { auth } from "./auth";
import { user } from "./user";

export type ModelContext = {
    userId?: string;
    sessionId?: string;
};

export const models = (context: ModelContext) => ({
    auth: auth(context),
    user: user(context),
});
export type Models = ReturnType<typeof models>;
