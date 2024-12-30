// import { describe, expect, test, vi } from 'vitest'
// import { render, screen, fireEvent } from '@testing-library/react'
// import Home from '../app/page'
// import * as auth from '../app/api/auth/cookie'

// vi.mock('../lib/prisma', () => ({
//   prisma: prismaMock
// }))

// describe('Home Page', () => {
//   const mockCollection = [
//     {
//       id: '1',
//       title: 'Test Book',
//       author: 'Test Author',
//       isbn: '1234567890',
//       publisher: 'Test Publisher', 
//       yearPublished: 2024,
//       availableCopies: 1,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       deletedAt: null
//     }
//   ]

//   beforeEach(() => {
//     vi.spyOn(auth, 'getAuth').mockResolvedValue({
//       member: { isAdmin: false }
//     })
    
//     prismaMock.collection.findMany.mockResolvedValue(mockCollection)
//     prismaMock.collection.count.mockResolvedValue(1)
//   })

//   test('renders books grid', async () => {
//     render(await Home({ searchParams: Promise.resolve({ page: '1' }) }))
//     expect(screen.getByText('Test Book')).toBeInTheDocument()
//     expect(screen.getByText('Test Author')).toBeInTheDocument()
//   })

//   test('shows add collection button for admin', async () => {
//     vi.spyOn(auth, 'getAuth').mockResolvedValue({
//       member: { isAdmin: true }
//     })
    
//     render(await Home({ searchParams: Promise.resolve({ page: '1' }) }))
//     expect(screen.getByText('Tambah Koleksi')).toBeInTheDocument()
//   })

//   test('hides add collection button for non-admin', async () => {
//     render(await Home({ searchParams: Promise.resolve({ page: '1' }) }))
//     expect(screen.queryByText('Tambah Koleksi')).not.toBeInTheDocument()
//   })

//   test('uses default page 1 when no page param', async () => {
//     render(await Home({ searchParams: Promise.resolve({}) }))
//     expect(prismaMock.collection.findMany).toHaveBeenCalledWith({
//       take: 15,
//       skip: 0,
//       orderBy: { title: 'asc' }
//     })
//   })
// })
