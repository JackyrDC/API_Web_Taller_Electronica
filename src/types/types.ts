// Interfaces basadas en el esquema de Prisma

export interface UserType {
  id: number;
  typeName: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  users?: User[];
}

export interface User {
  id: number;
  idNumber: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  password: string;
  phone: string | null;
  userTypeId: number;
  userType?: UserType;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  itemRequests?: AvailabilityRequest[];
  lendRequests?: LendRequest[];
}

export interface ItemCategory {
  id: number;
  categoryName: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  items?: InventoryItem[];
}

export interface Class {
  id: number;
  className: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lendRequests?: LendRequest[];
}

export interface InventoryItem {
  id: number;
  itemName: string;
  description: string | null;
  quantity: number;
  categoryId: number;
  category?: ItemCategory;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  requests?: AvailabilityRequest[];
  lendRequests?: LendRequest[];
}

export interface AvailabilityRequestStatus {
  id: number;
  statusName: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  requests?: AvailabilityRequest[];
}

export interface AvailabilityRequest {
  id: number;
  requesterId: number;
  requester?: User;
  itemId: number;
  item?: InventoryItem;
  quantity: number;
  className: string | null;
  projectName: string | null;
  statusId: number;
  status?: AvailabilityRequestStatus;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LendRequestStatus {
  id: number;
  statusName: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  requests?: LendRequest[];
}

export interface LendRequest {
  id: number;
  requesterId: number;
  requester?: User;
  itemId: number;
  item?: InventoryItem;
  quantity: number;
  classId: number | null;
  class?: Class | null;
  projectName: string | null;
  statusId: number;
  status?: LendRequestStatus;
  isActive: boolean;
  lendDate: Date;
  returnDate: Date | null;
  realReturnDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserTypeDto {
  typeName: string;
  isActive?: boolean;
}

// DTOs para User
export interface CreateUserDto {
  idNumber: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  userType: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export interface CreateUserDtoSimple {
  idNumber: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  userTypeId: number;
  isActive?: boolean;
}

// DTOs para ItemCategory
export class CreateItemCategoryDto {
  categoryName: string;
  isActive?: boolean;
}

// DTOs para Class
export class CreateClassDto {
  className: string;
  isActive?: boolean;
}

// DTOs para InventoryItem
export interface CreateInventoryItemDto {
  itemName: string;
  description?: string | null;
  quantity?: number;
  category: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export class CreateInventoryItemDtoSimple {
  itemName: string;
  description?: string | null;
  quantity?: number;
  categoryId: number;
  isActive?: boolean;
}

// DTOs para AvailabilityRequestStatus
export class CreateAvailabilityRequestStatusDto {
  statusName: string;
  isActive?: boolean;
}

// DTOs para AvailabilityRequest
export interface CreateAvailabilityRequestDto {
  requester: {
    connect: { id: number };
  };
  item: {
    connect: { id: number };
  };
  quantity: number;
  className?: string | null;
  projectName?: string | null;
  status: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export class CreateAvailabilityRequestDtoSimple {
  requesterId: number;
  itemId: number;
  quantity: number;
  className?: string | null;
  projectName?: string | null;
  statusId: number;
  isActive?: boolean;
}

// DTOs para LendRequestStatus
export class CreateLendRequestStatusDto {
  statusName: string;
  isActive?: boolean;
}

// DTOs para LendRequest
export interface CreateLendRequestDto {
  requester: {
    connect: { id: number };
  };
  item: {
    connect: { id: number };
  };
  quantity: number;
  class?: {
    connect: { id: number };
  } | null;
  projectName?: string | null;
  status: {
    connect: { id: number };
  };
  isActive?: boolean;
  lendDate: Date | string;
  returnDate?: Date | string | null;
  realReturnDate?: Date | string | null;
}

export class CreateLendRequestDtoSimple {
  requesterId: number;
  itemId: number;
  quantity: number;
  classId?: number | null;
  projectName?: string | null;
  statusId: number;
  isActive?: boolean;
  lendDate: Date | string;
  returnDate?: Date | string | null;
  realReturnDate?: Date | string | null;
}

// DTOs de actualización
export class UpdateUserTypeDto {
  typeName?: string;
  isActive?: boolean;
}

export interface UpdateUserDto {
  idNumber?: string;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  userType?: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export interface UpdateUserDtoSimple {
  idNumber?: string;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  userTypeId?: number;
  isActive?: boolean;
}

export class UpdateItemCategoryDto {
  categoryName?: string;
  isActive?: boolean;
}

export class UpdateClassDto {
  className?: string;
  isActive?: boolean;
}

export interface UpdateInventoryItemDto {
  itemName?: string;
  description?: string | null;
  quantity?: number;
  category?: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export class UpdateInventoryItemDtoSimple {
  itemName?: string;
  description?: string | null;
  quantity?: number;
  categoryId?: number;
  isActive?: boolean;
}

export class UpdateAvailabilityRequestStatusDto {
  statusName?: string;
  isActive?: boolean;
}

export interface UpdateAvailabilityRequestDto {
  requester?: {
    connect: { id: number };
  };
  item?: {
    connect: { id: number };
  };
  quantity?: number;
  className?: string | null;
  projectName?: string | null;
  status?: {
    connect: { id: number };
  };
  isActive?: boolean;
}

export class UpdateAvailabilityRequestDtoSimple {
  requesterId?: number;
  itemId?: number;
  quantity?: number;
  className?: string | null;
  projectName?: string | null;
  statusId?: number;
  isActive?: boolean;
}

export class UpdateLendRequestStatusDto {
  statusName?: string;
  isActive?: boolean;
}

export interface UpdateLendRequestDto {
  requester?: {
    connect: { id: number };
  };
  item?: {
    connect: { id: number };
  };
  quantity?: number;
  class?: {
    connect: { id: number };
  } | null;
  projectName?: string | null;
  status?: {
    connect: { id: number };
  };
  isActive?: boolean;
  lendDate?: Date | string;
  returnDate?: Date | string | null;
  realReturnDate?: Date | string | null;
}

export class UpdateLendRequestDtoSimple {
  requesterId?: number;
  itemId?: number;
  quantity?: number;
  classId?: number | null;
  projectName?: string | null;
  statusId?: number;
  isActive?: boolean;
  lendDate?: Date | string;
  returnDate?: Date | string | null;
  realReturnDate?: Date | string | null;
}
