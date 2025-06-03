import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [userType, setUserType] = useState<"owner" | "renter" | null>(null);

  if (userType === "owner") {
    return <OwnerDashboard />;
  }

  if (userType === "renter") {
    return <RenterProfile />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">ElectroRent</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Платформа аренды электротранспорта для собственников и арендаторов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setUserType("owner")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Settings" size={32} className="text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Собственник</CardTitle>
              <CardDescription>
                Управляйте парком электротранспорта и получайте доход от аренды
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Добавление устройств
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Трекинг в реальном времени
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Автоматический сбор платежей
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Удаленная блокировка
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setUserType("renter")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="User" size={32} className="text-indigo-600" />
              </div>
              <CardTitle className="text-2xl">Арендатор</CardTitle>
              <CardDescription>
                Арендуйте электротранспорт быстро и удобно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Быстрая регистрация
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Автоматическая оплата
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Чат с собственниками
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Безопасная аренда
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => setUserType(null)}
            className="text-gray-600"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к выбору
          </Button>
        </div>
      </div>
    </div>
  );
};

// Компонент дашборда собственника
const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Панель собственника
          </h1>
          <Button variant="outline">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить устройство
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Всего устройств
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">12</div>
              <p className="text-sm text-green-600">+2 за месяц</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Активные аренды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">8</div>
              <p className="text-sm text-blue-600">67% заполненность</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Доход за месяц
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">₽24,500</div>
              <p className="text-sm text-green-600">+15% к предыдущему</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Карта устройств</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="Map"
                    size={48}
                    className="text-gray-400 mx-auto mb-2"
                  />
                  <p className="text-gray-500">Интеграция с картами</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Последние события</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">Самокат #007 арендован</p>
                    <p className="text-xs text-gray-500">2 минуты назад</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">Платеж получен от пользователя</p>
                    <p className="text-xs text-gray-500">10 минут назад</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">
                      Велосипед #003 требует обслуживания
                    </p>
                    <p className="text-xs text-gray-500">1 час назад</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Компонент профиля арендатора
const RenterProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Профиль арендатора
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Регистрация</CardTitle>
              <CardDescription>
                Заполните данные для начала аренды
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Фамилия
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Ваша фамилия"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Серия и номер паспорта
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="0000 000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Платежные данные</CardTitle>
              <CardDescription>
                Для автоматического списания за аренду
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Номер карты
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Срок действия
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="123"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Чат с собственниками</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-gray-100 rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded-lg max-w-xs">
                    <p className="text-sm">
                      Добро пожаловать! Готовы начать аренду?
                    </p>
                    <p className="text-xs text-gray-500">Собственник • 10:30</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Написать сообщение..."
                />
                <Button>
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-4">
            <Button className="flex-1">Сохранить данные</Button>
            <Button variant="outline" className="flex-1">
              Начать аренду
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
