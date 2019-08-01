import { ApiModelProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiModelProperty({required: true})
  readonly code: number;

  @ApiModelProperty({required: true})
  readonly data: T;

}

export interface Response<T> {
  data: T;
}