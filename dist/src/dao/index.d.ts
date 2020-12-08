import { Task } from '@grupakmk/libstorefront';
export declare class GusInfoDao {
    private taskQueue;
    getCorporateInfo(taxvat: string): Promise<Task>;
    constructor(taskQueue: any);
}
