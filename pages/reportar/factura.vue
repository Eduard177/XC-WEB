<template>
  <div>
    <h1 class="text-xl">Facturas</h1>
    <section>
      <div class="flex flex-wrap justify-start flex-row w-full">
        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Tipo</label>
          <select class="form-input" name="facturas">
            <option value="1">Rembolsable</option>
          </select>
        </div>

        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for="proveedor">Proveedor</label>
          <input class="form-input" placeholder="Quiznos">
        </div>

        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Tipo Bienes y Servicios Comprados</label>
          <select class="form-input" name="bienes">
            <option value="1">01 - Gasto Personal</option>
          </select>
        </div>

        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Fecha de pago</label>
          <input class="form-input" type="date" name id>
        </div>

        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Subtotal</label>
          <input class="form-input" placeholder="RD$ 280.20">
        </div>

        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>RNC</label>
          <input class="form-input" placeholder="123-456785-1">
        </div>
        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Detalle</label>
          <input class="form-input" placeholder="Almuerzo">
        </div>
        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>NCF</label>
          <input class="form-input" placeholder="B010009098">
        </div>
        <div class="flex flex-col mt-6 pr-6 w-full lg:w-1/2">
          <label for>Forma de pago</label>
          <select class="form-input" name="bienes">
            <option value="1">Efectivo</option>
          </select>
        </div>
        <div class="flex mt-8">
          <div class="flex flex-col">
            <label>ITBIS</label>
            <input type="checkbox">
          </div>
          <span class="text-sm -ml-1 pt-3 gray-350">RD$0.00</span>
          <div class="flex flex-col ml-8">
            <label for="cbox2">Propina</label>
            <input type="checkbox" id="cbox2" value="second_checkbox">
          </div>
          <span class="text-sm -ml-2 pt-3 gray-350">RD$0.00</span>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col mt-8">
          <label for>Total</label>
          <span class="text-3xl text-teal-500">RD$ 280.20</span>
        </div>
        <div class="flex items-center justify-around w-full">
          <a class="btn bg-grad-gold/orange w-1/3 mt-12" href="#">Cancelar</a>
          <a class="btn bg-grad-green/orange w-1/3 mt-12 h-12" href="#">Reportar</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  layout: "main"
};
</script>