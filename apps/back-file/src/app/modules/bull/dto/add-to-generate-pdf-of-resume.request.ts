import { GeneratePdfOfResumeFileInputs } from "@dto";

export class AddToGeneratePdfOfResumeQueueBullRequest {
  fileId: string;
  inputs: GeneratePdfOfResumeFileInputs;
}
