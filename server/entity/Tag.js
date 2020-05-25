import {
   Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
  
@Entity()
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id = null;

  @Column('varchar')
  @IsNotEmpty()
  name = '';
 }
  
export default Tag;
  