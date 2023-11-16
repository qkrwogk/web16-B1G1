import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
	@ApiProperty({ description: '게시글 제목' })
	title: string;

	@ApiProperty({ description: '게시글 내용' })
	content: string;

	@ApiProperty({ description: '게시글 작성자' })
	author: string;
}
