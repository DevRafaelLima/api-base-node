export type IPermission = {
    _id: string;
    resource: string;
    action: string;
    allowed: boolean;
}