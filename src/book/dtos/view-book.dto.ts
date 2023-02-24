export class ViewBookDTO {
    constructor(
        readonly id:string, 
        readonly title:string, 
        readonly author: string, 
        readonly sku: string
    )
    {}
}