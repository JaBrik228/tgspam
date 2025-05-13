import { MainLayout } from '@shared/ui'

function App() {
    return (
        <MainLayout>
            <div className="flex items-center justify-end mb-6">
                <button
                    type="button"
                    className="rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    ДОБАВИТЬ АККАУНТ
                </button>
            </div>

            <div className="grid grid-cols-4 text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4 px-6">
                <div>Аккаунт</div>
                <div>Время в работе</div>
                <div>Кол-во сообщений</div>
                <div className="text-right">Статус</div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-4 items-center rounded-lg bg-blue-500 px-6 py-4 text-white shadow-md">
                    <div className="font-semibold">НАЗВАНИЕ</div>
                    <div className="justify-self-start">40 ЧАСОВ</div>
                    <div className="justify-self-start">20 СООБЩЕНИЙ</div>
                    <div className="justify-self-end">
                        <button
                            type="button"
                            className="rounded-md bg-green-400/90 px-4 py-1 text-xs font-semibold text-white hover:bg-green-500 focus:outline-none"
                        >
                            КНОПКА
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center rounded-lg bg-blue-500 px-6 py-4 text-white shadow-md">
                    <div className="font-semibold">НАЗВАНИЕ</div>
                    <div className="justify-self-start">40 ЧАСОВ</div>
                    <div className="justify-self-start">20 СООБЩЕНИЙ</div>
                    <div className="justify-self-end">
                        <button
                            type="button"
                            className="rounded-md bg-green-400/90 px-4 py-1 text-xs font-semibold text-white hover:bg-green-500 focus:outline-none"
                        >
                            КНОПКА
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center rounded-lg bg-blue-500 px-6 py-4 text-white shadow-md">
                    <div className="font-semibold">НАЗВАНИЕ</div>
                    <div className="justify-self-start">40 ЧАСОВ</div>
                    <div className="justify-self-start">20 СООБЩЕНИЙ</div>
                    <div className="justify-self-end">
                        <button
                            type="button"
                            className="rounded-md bg-green-400/90 px-4 py-1 text-xs font-semibold text-white hover:bg-green-500 focus:outline-none"
                        >
                            КНОПКА
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center rounded-lg bg-blue-500 px-6 py-4 text-white shadow-md">
                    <div className="font-semibold">НАЗВАНИЕ</div>
                    <div className="justify-self-start">40 ЧАСОВ</div>
                    <div className="justify-self-start">20 СООБЩЕНИЙ</div>
                    <div className="justify-self-end">
                        <button
                            type="button"
                            className="rounded-md bg-green-400/90 px-4 py-1 text-xs font-semibold text-white hover:bg-green-500 focus:outline-none"
                        >
                            КНОПКА
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 items-center rounded-lg bg-blue-500 px-6 py-4 text-white shadow-md">
                    <div className="font-semibold">НАЗВАНИЕ</div>
                    <div className="justify-self-start">40 ЧАСОВ</div>
                    <div className="justify-self-start">20 СООБЩЕНИЙ</div>
                    <div className="justify-self-end">
                        <button
                            type="button"
                            className="rounded-md bg-green-400/90 px-4 py-1 text-xs font-semibold text-white hover:bg-green-500 focus:outline-none"
                        >
                            КНОПКА
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default App
