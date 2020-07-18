import { Resolver, Mutation, Arg, Float, Query, Field, InputType, Int } from "type-graphql"; 
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput{
    @Field()
    title?: string;

    @Field(() => Float)
    minutes?: number;
}

@Resolver()
export class MovieResolver {

    /**
     * insert a new movie into the db
     * @param options - the MovieInput { title, minutes}
     */
    @Mutation(() => Movie) 
    async createMovie(
		@Arg('options', () => MovieInput) options: MovieInput 
	) {
        const movie: Movie = await Movie.create(options).save();
        return movie;
    }

    /**
     * update an existing movie
     * @param id  - movie id
     * @param movieUpdate - the MovieInput { title, minutes}
     */
    @Mutation(() => Boolean)
    async updateMovie(
        @Arg('id', () => Int) id: number,
        @Arg('options', () => MovieInput) movieUpdate: MovieInput 
    ) {
        await Movie.update({id}, movieUpdate);
        return true;
    }

    /**
     * delete a movie from the db
     * @param id  - movie id
     */
    @Mutation(() => Boolean)
	async deleteMovie(@
		Arg('id', () => Int) id: number
	) {
        await Movie.delete({id});
        return true;
    }

    /**
     * get all movies in db
     */
    @Query(() => [Movie])
    movies(){
        return Movie.find();
    }

    /**
     * get movie by id
     * @param id - movie id
     */
    @Query(() => Movie)
    movie(
		@Arg('id', () => Int) id: number
	){
        return Movie.findOne({id});
    }
}
