import { ApiModelProperty } from '@nestjs/swagger';

export class GerUserDto {
  @ApiModelProperty({required: true})
  readonly id: number;

  @ApiModelProperty({required: false})
  readonly name: string;

}