import { Resolver, Mutation, Arg, Float, Query, Field, InputType } from "type-graphql"; 
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput{
    @Field()
    title: string;

    @Field(() => Float)
    minutes: number;
}

@Resolver()
export class MovieResolver {
    @Mutation(() => Movie)
    async createMovie(@Arg('options', () => MovieInput) options: MovieInput ) {
        const movie: Movie = await Movie.create(options).save();
        return movie;
    }

    @Query(() => [Movie])
    movies(){
        return Movie.find();
    }
}