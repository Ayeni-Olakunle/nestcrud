import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('crud')
export class CrudController {
    @Get()
    findAll(){ 
        return "Find All Data"
    }
    
    @Get(":id")
    findOneData(){ 
        return "Find One Data"
    }
    
    @Post()
    sendData(){ 
        return "Send Data"
    }
    
    @Put(":id")
    editData(){
        return "Edit Data"
    }

    @Delete("id")
    deleteData() {
        return "Delete user data"
    }
}
