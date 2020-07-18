import { Resolver, Mutation, Arg, Float, Query } from "type-graphql"; 
import { Movie } from "../entity/Movie";

@Resolver()
export class MovieResolver {
    @Mutation(() => Boolean)
    async createMovie(@Arg('title') title: string, @Arg('minutes', () => Float) minutes: number){
        await Movie.insert({title, minutes});
        console.log(`${title} ${minutes} created`);
        return true;
    }

    @Query(() => [Movie])
    movies(){
        return Movie.find();
    }
}