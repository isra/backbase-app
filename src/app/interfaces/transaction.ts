export interface Transaction {
    id?: number;
    amount: number;
    categoryCode: string;
    merchant: string;
    merchantLogo: string;
    transactionDate: string;
    transactionType: string;
    date4filter?: string;
}
