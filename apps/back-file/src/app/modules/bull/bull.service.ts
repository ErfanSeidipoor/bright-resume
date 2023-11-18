import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { GENERATE_PDF_OF_RESUME_QUEUE } from "./constants";
import { GeneratePdfOfResumeFileInputs } from "@dto";

@Injectable()
export class BullService {
  constructor(
    @InjectQueue(GENERATE_PDF_OF_RESUME_QUEUE)
    private readonly generatePdfOfResumeQueue: Queue
  ) {}

  async addToGeneratePdfOfResumeQueue(
    userId: string,
    input: GeneratePdfOfResumeFileInputs
  ) {
    await this.generatePdfOfResumeQueue.add({
      userId,
      input,
    });
  }
}
