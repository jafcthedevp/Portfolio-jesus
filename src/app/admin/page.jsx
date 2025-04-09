"use client"

import { useState } from "react"
import { ImageUpload } from "@/components/Image-upload"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
    const [profileImage, setProfileImage] = useState("")

    const handleSaveImage = () => {
        if (profileImage) {
            localStorage.setItem("profileImage", profileImage)
            alert("Imagen guardada correctamente")
        }
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <Link href="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
                <ArrowLeft size={16} />
                <span>Volver al portfolio</span>
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Administración del Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Foto de perfil</h3>
                            <ImageUpload onImageSelected={setProfileImage} />

                            <div className="mt-4 flex justify-end">
                                <Button onClick={handleSaveImage} disabled={!profileImage} className="gap-2">
                                    <Save size={16} />
                                    Guardar cambios
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
