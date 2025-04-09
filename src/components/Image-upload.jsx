"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import Image from "next/image"

export function ImageUpload({ onImageSelected }) {
    const [previewUrl, setPreviewUrl] = useState(null)
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                const result = reader.result
                setPreviewUrl(result)
                if (onImageSelected) {
                    onImageSelected(result)
                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files?.[0]
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = () => {
                const result = reader.result
                setPreviewUrl(result)
                if (onImageSelected) {
                    onImageSelected(result)
                }
            }
            reader.readAsDataURL(file)
        }
    }

    const clearImage = () => {
        setPreviewUrl(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
        if (onImageSelected) {
            onImageSelected("")
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardContent className="p-6">
                <div className="text-center mb-4">
                    <h3 className="text-lg font-medium">Subir foto de perfil</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Arrastra y suelta una imagen o haz clic para seleccionar
                    </p>
                </div>

                {previewUrl ? (
                    <div className="relative w-40 h-40 mx-auto mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary-500">
                            <Image src={previewUrl || "/jesus.svg"} alt="Vista previa" fill className="object-cover" />
                        </div>
                        <button
                            onClick={clearImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                            aria-label="Eliminar imagen"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                            isDragging
                                ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                                : "border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600"
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">PNG, JPG o GIF (máx. 5MB)</p>
                    </div>
                )}

                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

                <div className="mt-4 flex justify-center">
                    <Button onClick={() => fileInputRef.current?.click()} className="gap-2">
                        <Upload size={16} />
                        Seleccionar imagen
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
