import { Injectable } from '@angular/core';

@Injectable()
export class SharingService{
    private data: any;

    setData(data: any){
        this.data = data;
    }

    getData(): any{
        console.log(this.data);
        return this.data;
    }
}