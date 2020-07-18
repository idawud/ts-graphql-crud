import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from "typeorm";
import { Field, Int, Float, ObjectType } from "type-graphql";
@ObjectType()
@Entity()
export class Movie extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number; 

    @Field()
    @Column()
    title: string;

    @Field(() => Float)
    @Column('double', {default: 60})
    minutes: number;
}
