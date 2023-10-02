export interface ISortProperties {
    field: string;
    sortAscending: boolean;
}

export interface IConfigList {
    pageProperties: {
        currentPage: number;
        pageSize: number;
    };
    sortProperties: ISortProperties;
    filter: { [key: string]: any };
    searchBy: string | null;
}
