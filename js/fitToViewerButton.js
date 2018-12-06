/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

const {
  SpinalContextApp
} = require("spinal-env-viewer-context-menu-service");
const spinalgraph = require("spinalgraph");

const {
  SpinalForgeExtention
} = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");

const {
  spinalPanelManagerService
} = require("spinal-env-viewer-panel-manager-service");

import fitComponent from '../vue/fitToViewerPanel.vue';
import Vue from 'vue';


class SpinalContextFitToViewer extends SpinalContextApp {
  constructor() {
    super("fit button", "fit to viewer button", {
      icon: "zoom_in",
      icon_type: "in"
    });
  }

  isShown(option) {
  //  if (option.selectedNode instanceof spinalgraph.SpinalContext)
      return (true);
//    else
//      return (-1);
  }

  action(option) {
    spinalPanelManagerService.openPanel("fitViewerPanel", option);
  }
}

const extentionFitPanel = SpinalForgeExtention.createExtention({
  name: "fitViewerPanel",
  vueMountComponent: Vue.extend(fitComponent),
  // toolbar is optional
  panel: {
    title: "Fit a SpinalNode",
    classname: "spinal-pannel",
    closeBehaviour: "hide"
  },
  style: {
    left: "405px"
  },
  onload: () => {},
  onUnLoad: () => {}
});


export { SpinalContextFitToViewer, extentionFitPanel };