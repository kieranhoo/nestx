import { Module } from '@nestjs/common';
import { CommonController } from '@/modules/common';
import { CommonService } from '@/modules/common';

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [CommonService],
})
export class AppModule {}
