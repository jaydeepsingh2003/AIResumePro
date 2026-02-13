export class CreateResumeDto {
    title: string;
    targetJobTitle?: string;
    // content is optional initially or default empty structure
    content?: Record<string, any>;
    style?: Record<string, any>;
}
