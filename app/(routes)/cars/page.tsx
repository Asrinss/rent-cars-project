'use client'

import React, { useEffect, useState } from 'react'
import SectionBg from '../_components/SectionBg'
import { carsData } from '@/constans'
import { Checkbox } from '@/components/ui/checkbox'
import CartItem from '../_components/CartItem'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/components/ui/input'

const CarsPage = () => {
  type FilterType = {
    categories: string[]
    transmission: string[]
    priceRange: [number, number]
    fuel: string[]
  }

  type SortType = 'price-asc' | 'price-desc' | 'name'
  
  const initialFilters: FilterType = {
    categories: [],
    transmission: [],
    priceRange: [0, 1000],
    fuel: [],
  }

  const [filters, setFilters] = useState<FilterType>(initialFilters)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading] = useState(false)
  const [sortBy, setSortBy] = useState<SortType>('price-asc')
  const itemsPerPage = 6

  useEffect(() => {
    setCurrentPage(1)
    const searchParams = new URLSearchParams(window.location.search)
    const carType = searchParams.get('carType')
    
    if (carType) {
      setFilters(prev => ({
        ...prev,
        categories: [carType],
      }))
    }
  }, [])

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: (prevFilters[filterType as keyof FilterType] as string[]).includes(value)
        ? (prevFilters[filterType as keyof FilterType] as string[]).filter((item: string) => item !== value)
        : [...(prevFilters[filterType as keyof FilterType] as string[]), value],
    }))
    setCurrentPage(1)
  }

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newRange,
    }))
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setFilters(initialFilters)
    setCurrentPage(1)
    setSortBy('price-asc')
  }

  const sortCars = (cars: typeof carsData) => {
    return [...cars].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.pricePerDay - b.pricePerDay
        case 'price-desc':
          return b.pricePerDay - a.pricePerDay
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }

  const filteredCars = carsData.filter((car) => {
    if (
      filters.categories.length === 0 &&
      filters.transmission.length === 0 &&
      filters.fuel.length === 0 &&
      (filters.priceRange[0] === 0 && filters.priceRange[1] === 1000)
    ) {
      return true
    }

    const isCategoryMatch = filters.categories.length === 0 || filters.categories.includes(car.type)
    const isTransmissionMatch = filters.transmission.length === 0 || filters.transmission.includes(car.transmission)
    const isPriceMatch = car.pricePerDay >= filters.priceRange[0] && car.pricePerDay <= filters.priceRange[1]
    const isFuelMatch = filters.fuel.length === 0 || (car.fuel && filters.fuel.includes(car.fuel))

    return isCategoryMatch && isTransmissionMatch && isPriceMatch && isFuelMatch
  })

  const sortedCars = sortCars(filteredCars)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCars = sortedCars.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(sortedCars.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const ActiveFilters = () => {
    const activeFilters = [
      ...filters.categories,
      ...filters.transmission,
      ...filters.fuel,
      ...(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000 
        ? [`$${filters.priceRange[0]} - $${filters.priceRange[1]}`] 
        : [])
    ]

    return activeFilters.length > 0 ? (
      <div className="flex flex-wrap gap-2 mb-4">
        {activeFilters.map(filter => (
          <span key={filter} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {filter}
          </span>
        ))}
      </div>
    ) : null
  }

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  return (
    <div>
      <SectionBg source='Home' title='Cars'/>
      <div className='flex flex-col md:flex-row container mx-auto mb-20 mt-5 px-4'>
        <aside className='w-full md:w-1/4 px-6 py-4 filterbg rounded-xl mb-6 md:mb-0'>
          <button 
            onClick={resetFilters}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors mb-4"
          >
            Reset Filters
          </button>

          <div className='mb-4'>
            <h2 className='font-bold mb-2 text-lg'>Categories</h2>
            {['SUV','Luxury Car','Sedan','Sports Car','Crossover','Cabrio', 'Hatchback'].map((category) => ( 
              <div key={category} className='flex items-center mb-1'>
                <Checkbox 
                  id={category} 
                  checked={filters.categories.includes(category)} 
                  onCheckedChange={() => handleFilterChange('categories', category)}
                />
                <label htmlFor={category} className='ml-2'>{category}</label>
              </div>
            ))}
          </div>

          <div className='mb-4'>
            <h2 className='font-bold mb-2 text-lg'>Transmission</h2>
            {['Auto','Manual'].map((transmission) => ( 
              <div key={transmission} className='flex items-center mb-1'>
                <Checkbox 
                  id={transmission} 
                  checked={filters.transmission.includes(transmission)} 
                  onCheckedChange={() => handleFilterChange('transmission', transmission)}
                />
                <label htmlFor={transmission} className='ml-2'>{transmission}</label>
              </div>
            ))}
          </div>

          <div className='mb-4'>
            <h2 className='font-bold mb-2 text-lg'>Price Range</h2>
            <div className='flex flex-row gap-2 mt-4 items-center'>
              <div className='flex flex-col mb-2 md:mb-0'>
                <Label>Min</Label>
                <Input 
                  type='number' 
                  value={filters.priceRange[0]} 
                  onChange={(e) => handlePriceRangeChange([Number(e.target.value), filters.priceRange[1]])} 
                  className='w-full md:w-20 p-1 rounded border'
                />
              </div>
              <div className='flex flex-col mb-2 md:mb-0'>
                <Label>Max</Label>
                <Input 
                  type='number' 
                  value={filters.priceRange[1]} 
                  onChange={(e) => handlePriceRangeChange([filters.priceRange[0], Number(e.target.value)])} 
                  className='w-full md:w-20 p-1 rounded border'
                />
              </div>
            </div>
          </div>

          <div className='mb-4'>
            <h2 className='font-bold mb-2 text-lg'>Fuel</h2>
            {['Gas','Hybrid', 'Electric','Diesel'].map((fuel) => ( 
              <div key={fuel} className='flex items-center mb-1'>
                <Checkbox 
                  id={fuel} 
                  checked={filters.fuel.includes(fuel)} 
                  onCheckedChange={() => handleFilterChange('fuel', fuel)}
                />
                <label htmlFor={fuel} className='ml-2'>{fuel}</label>
              </div>
            ))}
          </div>
        </aside>

        <div className='w-full md:w-3/4 p-4'>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Found {sortedCars.length} cars
            </div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="p-2 border rounded-md"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          <ActiveFilters />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {isLoading ? (
              <LoadingSpinner />
            ) : currentCars.length > 0 ? (
              currentCars.map((car, index) => (
                <CartItem car={car} key={index}/>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                No cars found matching your filters
              </div>
            )}
          </div>

          {sortedCars.length > itemsPerPage && (
            <div className='w-full flex justify-center mt-4'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    {currentPage > 1 ? (
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          handlePageChange(currentPage - 1)
                        }}
                      />
                    ) : (
                      <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
                    )}
                  </PaginationItem>
                  {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        href="#" 
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault()
                          handlePageChange(page)
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem> 
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if(currentPage < totalPages) handlePageChange(currentPage + 1)
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarsPage