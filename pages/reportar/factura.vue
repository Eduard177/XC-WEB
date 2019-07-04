<template>
  <div>
    <h1 class="text-xl">Facturas</h1>
    <section>
      <div class="flex justify-around mt-12">
        <div class="flex flex-col w-1/2 pr-16">
          <div class="flex flex-col">
            <label for>Tipo</label>
            <select class="form-input w-full" name="facturas">
              <option value="1">Rembolsable</option>
            </select>
          </div>

          <div class="flex flex-col mt-6">
            <label for="proveedor">Proveedor</label>
            <input class="form-input w-full" placeholder="Quiznos">
          </div>

          <div class="flex flex-col mt-6">
            <label for>Tipo Bienes y Servicios Comprados</label>
            <select class="form-input w-full" name="bienes">
              <option value="1">01 - Gasto Personal</option>
            </select>
          </div>

          <div class="flex flex-col mt-6">
            <label for>Fecha de pago</label>
            <input class="form-input w-full" type="date" name id>
          </div>

          <div class="flex flex-col mt-6">
            <label for>Subtotal</label>
            <input class="form-input w-full" placeholder="RD$ 280.20">
          </div>
          <div class="flex flex-col mt-8">
            <label for>Total</label>
            <span class="text-3xl text-teal-500">RD$ 280.20</span>
          </div>

          <a class="btn bg-grad-gold/orange w-full mt-12" href="#">Cancelar</a>
        </div>

        <div class="flex flex-col w-1/2 pr-12">
          <div class="flex flex-col">
            <label for>RNC</label>
            <input class="form-input w-full" placeholder="123-456785-1">
          </div>
          <div class="flex flex-col mt-6">
            <label for>Detalle</label>
            <input class="form-input w-full" placeholder="Almuerzo">
          </div>
          <div class="flex flex-col mt-6">
            <label for>NCF</label>
            <input class="form-input w-full" placeholder="B010009098">
          </div>
          <div class="flex flex-col mt-6">
            <label for>Forma de pago</label>
            <select class="form-input w-full" name="bienes">
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
          <a style="margin-top: 9.2rem" class="btn bg-grad-green/orange w-full" href="#">Reportar</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "main"
};
</script>