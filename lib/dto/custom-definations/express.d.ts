declare global {
    namespace Express {
        interface Response {
            notFound: (status: number | null, message: string) => void;
            badRequest: (status: number | null, message: string) => void;
            success: (status: number | null, message: string) => void;
        }
    }
}
export {};
