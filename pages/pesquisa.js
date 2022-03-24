import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: ''
    })
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            console.log(data)
        } catch (err) {

        }
    }
    const onchange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-2x1">Críticas e sugestões</h1>
            <p className="text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type='text' className="p-4 block shadow bg-blue-100 m-2 rounded" placeholder='Nome' onChange={onchange} name='Nome' value={form.Nome} />
                <label className="font-bold">E-mail:</label>
                <input type="email" className="p-4 block shadow bg-blue-100 m-2 rounded" placeholder='Email' onChange={onchange} name='Email' value={form.Email} />
                <label className="font-bold">Whatsapp</label>
                <input type="number" className="p-4 block shadow bg-blue-100 m-2 rounded" placeholder='Whatsapp' onChange={onchange} name='Whatsapp' value={form.Whatsapp} />

                <button className="bg-gray-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow" onClick={save}>Salvar</button>

            </div>
        </div>
    )
}

export default Pesquisa