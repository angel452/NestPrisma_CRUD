import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrimsaService } from 'src/primsa/primsa.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrimsaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    console.log(createTaskDto);
    return await this.prismaService.task.create({
      data: createTaskDto,
    });
  }

  async findAll(): Promise<Task[]> {
    console.log('findAll');
    return await this.prismaService.task.findMany();
  }

  async findOne(id: number): Promise<Task> {
    console.log('findOne');
    const taskFound = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!taskFound) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return taskFound;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    console.log('update');
    return await this.prismaService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: number): Promise<Task> {
    console.log('remove');

    const task = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return await this.prismaService.task.delete({
      where: { id },
    });
  }
}
