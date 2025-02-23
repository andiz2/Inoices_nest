import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class CreaUsereDto {
    @IsNumber()
    readonly id: number;

    @IsEmail()
    @MinLength(4)
    readonly email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly password: string;

    @IsString()
    @MinLength(4)
    readonly name: string;

}
