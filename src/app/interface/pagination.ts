export interface pagination {

    nextPage:boolean;
    previousPage:boolean;

    pageIndex:number;
    totalPages:number;   
    
    eachTotalPages:number[];
    activeOrCurrentPage: string[]; // string for active css property : comes from back-end
  }
   