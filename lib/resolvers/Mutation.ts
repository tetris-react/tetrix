import { ExpressContext } from "./../../interfaces/index";
import {
  MutationResolvers,
  MutationLoginArgs,
  MutationRegisterArgs,
  AuthResponse,
  AuthInput,
  User,
} from "*.graphqls";
import db from "../../data/config";
import bcrypt from "bcryptjs";

export const Mutation: Required<MutationResolvers> = {
  // async addTodo(_: any, { data }: MutationAddTodoArgs): Promise<any> {
  //   if (data) {
  //     await db("todos").insert(data);
  //     const { name } = data;
  //     console.log(name);
  //     const todo: Todo = await db("todos")
  //       .where({ name })
  //       .first();
  //     console.log(todo);
  //     return todo;
  //   }
  // },
  async register(_: any, { data }: MutationRegisterArgs): Promise<User> {
    const { username, password } = data;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userInput: AuthInput = {
      username,
      password: hashedPassword,
    };
    await db("users").insert(userInput);
    return await db("users")
      .where({ username })
      .first();
  },
  async login(
    _: any,
    { data }: MutationLoginArgs,
    ctx: ExpressContext
  ): Promise<AuthResponse> {
    const { username, password } = data;

    const user: User = await db("users")
      .where({ username })
      .first();

    const valid = await bcrypt.compare(password, user.password);

    if (!user) {
      return "User not found. 🤷‍♂";
    }

    if (!valid) {
      return "Password is not valid. 💀";
    }

    ctx.req.session!.userId = user.id;

    return user;
  },
  // async editTodo(_: any, { data }: MutationEditTodoArgs) {
  //   const { id, name, description } = data;
  //   const args = { name, description };
  //   await db("todos")
  //     .where({ id })
  //     .update(args);
  //   return await db("todos")
  //     .where({ id })
  //     .first();
  // },
  // async deleteTodo(_: any, { id }: MutationDeleteTodoArgs) {
  //   await db("todos")
  //     .where({ id })
  //     .del();
  //   const message = "Todo has been deleted 💀";
  //   return { message };
  // },
};
