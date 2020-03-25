import { Pizza } from "./models/Pizza";
export const resolvers = {
  Query: {
    pizzas: () => Pizza.find()
  },
  Mutation: {
    createPizza: async (_, { name }) => {
      const pizza = new Pizza({ name });
      await pizza.save();
      console.log(`Pizza ${pizza.name} saved!`);
      return pizza;
    },
    deletePizza: async (_, { name }) => {
      const pizza = Pizza.findOne({ name });

      await pizza.deleteOne().exec(err => {
        if (err) {
          console.log(`Error deleting pizza: ${name}`);
        }
        console.log(`Pizza ${name} deleted successfully!`);
      });
    }
  }
};
