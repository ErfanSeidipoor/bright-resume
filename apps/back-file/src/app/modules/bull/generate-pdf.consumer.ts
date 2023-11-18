import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import { GENERATE_PDF_OF_RESUME_QUEUE } from "./constants";
import { GeneratePdfOfResumeFileInputs } from "@dto";

@Processor(GENERATE_PDF_OF_RESUME_QUEUE)
export class GeneratePdfOfResumeConsumer {
  private readonly logger = new Logger(GeneratePdfOfResumeConsumer.name);

  @Process()
  async generatePdfOfResume(
    job: Job<{ userId: string; input: GeneratePdfOfResumeFileInputs }>,
    second
  ) {
    this.logger.log(`Transcoding started: ${job.id}`, { second });
    await new Promise<void>((resolve, reject) =>
      setTimeout(() => reject(), 8000)
    );
    this.logger.log(`Transcoding complete for job: ${job.id}`);
  }
}
