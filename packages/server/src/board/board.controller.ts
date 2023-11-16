import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import {
	ApiBadRequestResponse,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
} from '@nestjs/swagger';

@Controller('board')
@ApiTags('게시글 API')
export class BoardController {
	constructor(private readonly boardService: BoardService) {}

	@Post()
	@ApiOperation({ summary: '게시글 생성', description: '게시글을 생성한다.' })
	@ApiCreatedResponse({ status: 201, description: '게시글 생성 성공' })
	@ApiBadRequestResponse({ status: 400, description: '잘못된 요청' })
	create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
		return this.boardService.create(createBoardDto);
	}

	@Get()
	findAll() {
		return this.boardService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: '게시글 조회', description: '게시글을 조회한다.' })
	@ApiOkResponse({ status: 200, description: '게시글 조회 성공' })
	@ApiNotFoundResponse({ status: 404, description: '게시글 없음' })
	getBoardById(@Param('id') id: string): Promise<Board> {
		return this.boardService.getBoardById(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
		return this.boardService.update(+id, updateBoardDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.boardService.remove(+id);
	}
}
