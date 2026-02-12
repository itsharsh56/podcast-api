import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    private configService: ConfigService,
  ) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'This action returns all episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'This action returns featured episodes';
  }
  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return this.episodesService.findOne(id);
  }
  @Post()
  create(@Body() input: CreateEpisodeDto) {
    console.log(input);
    return this.episodesService.create(input);
  }
}
