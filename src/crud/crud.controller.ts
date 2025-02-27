import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('crud')
export class CrudController {
    @Get()
    findAll(){ 
        return "Find All Data"
    }
    
    @Get()
    findOneData(){ 
        return "Find One Data"
    }
    
    @Post()
    sendData(){ 
        return "Send Data"
    }
    
    @Put()
    editData(){
        return "Edit Data"
    }

    @Delete()
    deleteData() {
        return "Delete user data"
    }
}
